function calculateString(first, senod, third) {
    const totalCount = first.length + senod.length + third.length;
    const averageCount = Math.floor(totalCount / 3);
    console.log(totalCount);
    console.log(averageCount);
}

calculateString('chocolate', 'ice cream', 'cake');
