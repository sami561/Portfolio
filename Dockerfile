FROM node:alpine

WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies inside the container
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

CMD ["npm", "start"]
