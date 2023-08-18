interface User {    
    email: string;
    password: string;
    username: string;
    setUser: (email: string, password: string) => void;
}

export default User;