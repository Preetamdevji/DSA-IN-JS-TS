// Best Time to Buy and Sell Stock

    let stock_Prices : Array<number>= [10,1,5,6,7,1];


const stock_Prices_function = (stock_Prices: Array<number>) => {
    let left:number = 0
    let maxProfit: number = 0

    for (let right=1; right<stock_Prices.length; right++) {
        if(stock_Prices[right] < stock_Prices[left]){
            left = right
        }else{
            let profit = stock_Prices[right] - stock_Prices[left]
            maxProfit = Math.max(maxProfit, profit)
        }
           
        
    }
    return maxProfit
}

console.log(stock_Prices_function(stock_Prices));


