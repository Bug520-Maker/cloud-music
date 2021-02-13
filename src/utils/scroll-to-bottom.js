export function isScrollBottom(scrollTop,scrollHeight,offsetHeight)
{
    if(Math.floor(offsetHeight+scrollTop)===scrollHeight||Math.ceil(offsetHeight+scrollTop)===scrollHeight)
    {
        return true
    }
    else{
        return false
    }
}