import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const args = await req.json();

  const result = { hello: args };

  return new Response(JSON.stringify(result));
};
