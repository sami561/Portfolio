import Link from 'next/link';

export default function NotFound() {
    return (
        <html lang="en">
            <body>
                <div className="flex flex-col items-center justify-center h-screen bg-primary text-text-color">
                    <h2 className="text-4xl font-bold mb-4">Not Found</h2>
                    <p className="mb-4">Could not find requested resource</p>
                    <Link href="/" className="text-accent hover:underline">
                        Return Home
                    </Link>
                </div>
            </body>
        </html>
    );
}
