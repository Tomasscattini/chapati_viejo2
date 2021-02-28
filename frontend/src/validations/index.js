export const validateInputLength = (value, len = 60) => {
    if (value.trim().length === 0 || value.trim().length > len) return false;
    return true;
};

export const validatePassword = (value) => {

};