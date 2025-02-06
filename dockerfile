# Use the official Cypress base image
FROM cypress/included:13.7.1

# Set the working directory
WORKDIR /e2e
# Install curl
RUN apt-get update && apt-get install -y curl
# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all project files
COPY . .

# Run Cypress tests
CMD ["npx", "cypress", "run"]
