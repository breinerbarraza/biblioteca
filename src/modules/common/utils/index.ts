import { envs } from '@app/config/envs';
import * as os from 'os';

export const selectEnvironment = () => {
  switch (envs.ENVIRONMENT) {
    case 'stage':
      return 'https://micontaqa.ossadow7.com';
    case 'production':
      return 'https://bk.miconta.online';
    default:
      return 'http://localhost:5173';
  }
};
export const base64ToArrayBuffer = (base64: string) => {
  const binaryString = atob(
    base64.substring(base64.indexOf('base64,') + 7, base64.length),
  );
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

/**
 * @function getTraceability
 * @param user // Usuario de la plataforma
 * @param event // Evento realizado
 * @returns Trazabilidad del usuario.
 */
export const getTraceability = () => {
  const hostname = os?.hostname();
  return {
    pc: hostname,
  };
};

export const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  let localIP = '';

  for (const iface in interfaces) {
    for (const details of interfaces[iface]) {
      if (details.family === 'IPv4' && !details.internal) {
        localIP = details.address;
        break; // Sale del bucle si encuentra la IP
      }
    }
    if (localIP) break; // Sale del bucle si encontró la IP
  }

  return localIP || 'No se encontró una IP local';
};
