#!/bin/bash
# Install dependencies for both parts
npm install --prefix backend
npm install --prefix frontend

# Start the backend server
npm start --prefix backend
