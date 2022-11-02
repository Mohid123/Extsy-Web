import { ApiResponse } from "../models/response.model";
import { ApiService } from "./api.service";

const apiService = new ApiService();

export interface Media {
  type: string,
  captureFileURL: string,
  path: string,
  thumbnailURL: string,
  thumbnailPath: string,
  blurHash: string,
  backgroundColorHex: string
}

export const uploadMedia = async (folderName: string, file:any): Promise<ApiResponse<any>> => {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return await apiService.postMedia(`/media-upload/mediaFiles/${folderName}`, formData)
  }