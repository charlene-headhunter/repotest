# Use the official Cypress base image
FROM cypress/included:13.7.1

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all project files
COPY . .

# Run Cypress tests
CMD ["npx", "cypress", "run"]
