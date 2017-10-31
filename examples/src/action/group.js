export const GROUP = 'GROUP';
export const GROUP_REQUEST = 'GROUP_REQUEST';
export const GROUP_SUCCESS = 'GROUP_SUCCESS';
export const GROUP_FAILURE = 'GROUP_FAILURE';
export const getGroup = () => {
    return {
        type: GROUP,
        promise: { method: 'get', url: 'http://192.168.232.211:9998/rest/resource/group' }
    };
};