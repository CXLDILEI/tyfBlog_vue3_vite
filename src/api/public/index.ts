import {ApiPromise, upLoad} from '/@/api';

/**
 * 附件上传
 * @param file
 */
export function uploadFile(file:File):ApiPromise<any> {
    const formData = new FormData();
    formData.append('file',file);
    return upLoad('file/uploadFile',formData);
}
