import {io} from 'socket.io-client';

// const URL = process.env.NODE_SOCKET_URI;

export const socket = io('http://localhost:8080');
