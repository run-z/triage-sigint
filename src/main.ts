import process from 'node:process';
import { createHelloServer } from './create-hello-server.js';

process.on('SIGINT', handleSignal);
process.on('SIGTERM', handleSignal);
process.on('SIGHUP', handleSignal);

createHelloServer().listen(3000);

function handleSignal(signal: string): void {
  console.log(`Hello server received ${signal}. Exiting`);
  process.exit(0);
}
