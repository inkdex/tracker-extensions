export const viewerQuery = `
query Query {
	Viewer {
		avatar {
			large
		}
    createdAt
		id
		name
	}
}
`;

export type Viewer = {
    Viewer: ViewerUser;
};

type ViewerUser = {
    avatar: ViewerAvatar;
    createdAt: number;
    id: number;
    name: string;
};

type ViewerAvatar = {
    large: string;
};

export type JwtPayload = {
    aud: number;
    jti: string;
    iat: number;
    nbf: number;
    exp: number;
    sub: number;
    scopes: string[];
};
