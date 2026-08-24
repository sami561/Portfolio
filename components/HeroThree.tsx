"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const HeroThree = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement as HTMLElement;
    const size = () =>
      Math.min(parent.clientWidth, parent.clientHeight) || 440;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0.4, 4.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const s = size();
    renderer.setSize(s, s, false);

    const group = new THREE.Group();
    scene.add(group);

    const green = 0x3ee08a;
    const icoGeo = new THREE.IcosahedronGeometry(1.35, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: green,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    group.add(ico);

    const coreGeo = new THREE.IcosahedronGeometry(0.85, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: green,
      flatShading: true,
      roughness: 0.4,
      metalness: 0.1,
      transparent: true,
      opacity: 0.18,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);
    const light1 = new THREE.PointLight(green, 1.4, 20);
    light1.position.set(3, 3, 3);
    scene.add(light1);
    const light2 = new THREE.PointLight(0xffffff, 0.6, 20);
    light2.position.set(-3, -2, 2);
    scene.add(light2);

    let frame = 0;
    let raf = 0;
    const animate = () => {
      frame += 1;
      group.rotation.y += 0.0035;
      group.rotation.x = Math.sin(frame * 0.006) * 0.2;
      core.rotation.y -= 0.002;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const ns = size();
      renderer.setSize(ns, ns, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      icoGeo.dispose();
      icoMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] animate-floatY">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, oklch(85% 0.08 155 / 0.5), transparent 70%)",
        }}
      />
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default HeroThree;
