# Use the official Cypress base image
FROM cypress/included:13.7.1

# Install curl
RUN apt-get update && apt-get install -y curl

# Set the working directory
WORKDIR /e2e

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all project files
COPY . .

# Debug: Check if curl is installed before running Cypress
RUN which curl && curl --version

# Run Cypress tests
CMD ["sh", "-c", "which curl && curl --version && npx cypress run"]
