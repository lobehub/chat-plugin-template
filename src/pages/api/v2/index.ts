import {
  PluginErrorType,
  createErrorResponse,
  getPluginSettingsFromRequest,
} from '@lobehub/chat-plugin-sdk';

import { Settings } from './_types';
import runner from './_utils';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const settings = getPluginSettingsFromRequest<Settings>(req);

  if (!settings)
    return createErrorResponse(PluginErrorType.PluginSettingsInvalid, {
      message: 'Plugin settings not found.',
    });

  try {
    const args = await req.json();
    const result = await runner(args, settings);
    return new Response(JSON.stringify(result));
  } catch (error) {
    return createErrorResponse(PluginErrorType.PluginServerError, error as object);
  }
};
