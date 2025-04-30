# React Lazy Loading Image Gallery

A modern React application featuring lazy loading images, infinite scroll, and optimized performance.

## Features

- Lazy loading images with blur effect
- Infinite scroll gallery
- Responsive design
- Docker containerization
- Nginx optimization
- TypeScript support

## Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose
- A domain name (for production deployment)

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Docker Development

1. Build and start the development container:
   ```bash
   docker-compose up dev
   ```

## Production Deployment

1. Build the production image:
   ```bash
   docker-compose build frontend
   ```

2. Run the production container:
   ```bash
   docker-compose up frontend
   ```

## DNS Configuration

1. Purchase a domain name from a domain registrar
2. Point your domain's A record to your server's IP address
3. Configure Nginx to handle your domain:
   - Update the `server_name` in `nginx.conf` to your domain
   - Restart the Nginx container

## Performance Optimization

- Images are lazy loaded with blur effect
- Static assets are cached
- Gzip compression is enabled
- Code splitting with React.lazy
- Responsive images

## Security

- X-Frame-Options header
- X-XSS-Protection header
- X-Content-Type-Options header

## License

MIT 