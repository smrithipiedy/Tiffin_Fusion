# Base image for Node.js
FROM node:18-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the entire application directory into the container
COPY . .

# Install any dependencies if required (assuming a Node.js application)
# Remove the following line if it's purely a static web application
RUN npm install

# Expose the default port if the app uses an HTTP server (e.g., Express in app.js)
EXPOSE 3000

# Command to start the application (adjust if using a static site or different framework)
CMD ["node", "app.js"]
