import * as huejay from 'huejay';

export { Controller } from './Controller';

const logger = console;

export interface Bridge {
  id: string;
  ip: string;
}

export const discover = async () => {
  try {
    const bridges = await huejay.discover();
    return bridges.map(b => ({ id: b.id, ip: b.ip }));
  } catch (err) {
    logger.error('Err', err);
  }
};
