export type IAuthResponse = {
  accessToken: string;
  user: User;
};

export type User = {
  email: string;
  password: string;
  isAuthorized: boolean;
  deletedAt: string;
  firstName: string;
  lastName: string;
  teamId: number | string;
  linkedinLink: string;
  avatarKey: string;
  loggedInAt: string;
  id: string;
  imported: false;
  role: string;
  isReceivingNotifications: boolean;
  createdAt: string;
  updatedAt: string;
};

export type IAuthData = {
  email: string;
  password: string;
};
