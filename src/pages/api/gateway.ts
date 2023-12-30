import { createLobeChatPluginGateway } from '@lobehub/chat-plugins-gateway';

export default async (req: Request) => {
  if (process.env.NODE_ENV === 'development') {
    return createLobeChatPluginGateway()(req);
  }

  return;
};
