import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const errorCatchingMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.warn('We got a rejected action!');
    toast.error(action.error.message, { duration: 6000 });
  }

  return next(action);
};
