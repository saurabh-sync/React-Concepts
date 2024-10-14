import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Create Account: ", error);
      //   throw error;
    }
  }

  // async login({ email, password }) {
  //   try {
  //     const session = await this.account.createEmailPasswordSession(
  //       email,
  //       password
  //     );
  //     console.log("Session created: ", session); // Add this line
  //     return session;
  //   } catch (error) {
  //     console.log("login error: ", error);
  //     //   throw error;
  //   }
  // }

  async login({ email, password, returnUserData = false }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      console.log("Session created: ", session);
      if (returnUserData) {
        const userData = await this.getCurrentUser();
        return { session, userData };
      } else {
        return session;
      }
    } catch (error) {
      console.log("login error: ", error);
      // throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Get Current User: ", error);
      // throw error
    }
    return null;
  }

  async logout() {
    try {
      const result = await this.account.deleteSessions();
      console.log("Logged out successfully: ", result);
    } catch (error) {
      console.log("Log Out Error: ", error);
    }
  }
}

const authService = new AuthService();

export default authService;
