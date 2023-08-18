import { create } from 'zustand'
import User from '../types/user'

const userStore = create<User>((set) => ({
    email: 'test@gmail.com',
    password: 'test123',
    username: 'test',
    setUser: (email: string, password: string) => set({ email, password })
}));

export { userStore }

