import { axiosInstance  } from "./config";

export const getActivitiesInfoRequest = () => axiosInstance.get('/activiesinfo')

export const getActivitiesRequest = () => axiosInstance.get('/activies')

export const getGamesInfoRequest = () => axiosInstance.get('/gameinfo')

export const getGameListsRequest = () => axiosInstance.get('/gamelists')

export const getSelectedGameListsRequest = () => axiosInstance.get('/selectedgamelist')

export const getSalesInfoRequest = () => axiosInstance.get('/saleinfo')

export const getActivityLolInfoRequest = () => axiosInstance.get('/lolactivitiesinfo')

export const getLolSaleRequest = () => axiosInstance.get('/lolactivities')

export const getLolGiftRequest = () => axiosInstance.get('/gift')

export const getLolInfoRequest = () => axiosInstance.get('/lolinfo')

