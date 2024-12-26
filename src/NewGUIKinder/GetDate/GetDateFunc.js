export const issueDate = () => {
    const dateNow = Date.now();
    const issueDateCost = new Date(dateNow);
    const issueDateLocalConst = issueDateCost.toLocaleDateString();
    return issueDateLocalConst
}
export const issueTime = () => {
    const dateNow = Date.now();
    const issueDateCost = new Date(dateNow);
    const issueDateLocalConst = issueDateCost.toLocaleTimeString();
    return issueDateLocalConst
}