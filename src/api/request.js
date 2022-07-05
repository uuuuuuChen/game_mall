import { axiosInstance  } from "./config";

export const getActivitiesInfo = () => axiosInstance.get('/activiesinfo')

export const getActivities = () => axiosInstance.get('/activies')

export const getGamesInfo = () => axiosInstance.get('/gameinfo')

export const getGameLists = () => axiosInstance.get('/gamelists')

export const getSalesInfo = () => axiosInstance.get('/saleinfo')

export const getActivityLolInfo = () => axiosInstance.get('/lolactivitiesinfo')

export const getLolSale = () => axiosInstance.get('/lolactivities')

export const getLolGift = () => axiosInstance.get('/gift')

export const getLolInfo = () => axiosInstance.get('/lolinfo')

