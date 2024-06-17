// // 기본 시간(분), 기본 요금, 단위 시간(분), 단위 요금

// function solution(fees, records) {
//     var answer = [];
//     let car_arr = [];
//     let fee_arr = {};
//     let map = new Map();
    
//     for(let i = 0; i < records.length; i++) {
//         let [time, car, IO] = records[i].split(" ");
        
//         if(!map.has(car)) {
//             map.set(car, 0);
//             car_arr.push(car);
//         } 
        
//         if(IO == "IN") {
//             fee_arr[car] = time;
//         } else if(IO == "OUT") {
//             let [hour, min] = fee_arr[car].split(":").map(Number);
//             let [t_hour, t_min] = time.split(":").map(Number);
//             let result = Math.ceil((t_hour * 6 + t_min - hour * 6 - min - fees[0]) / fees[2]) * fees[3];
//             console.log(result);
            
            
//             if(map.get(car) + result <= 0) {
//                 map.set(car, fees[1]);
//             } else {
//                 map.set(car, result);
//             }
//         }
//     }
    
//     car_arr.sort();
    
//     for(let i = 0; i < car_arr.length; i++) {
//         answer.push(map.get(car_arr[i]));
//     }
    
//     return answer;
// }

function solution(fees, records) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    let carTimes = {}; // 차량별 총 주차 시간 저장
    let inTimes = {}; // 차량별 최근 입차 시간 저장
    let feesMap = {}; // 차량별 요금 저장

    records.forEach(record => {
        const [time, car, action] = record.split(" ");
        const [hour, minute] = time.split(":").map(Number);
        const totalMinutes = hour * 60 + minute;

        if (action === "IN") {
            inTimes[car] = totalMinutes;
        } else {
            const parkedTime = totalMinutes - inTimes[car];
            carTimes[car] = (carTimes[car] || 0) + parkedTime;
            delete inTimes[car];
        }
    });

    // 출차되지 않은 차량 처리
    const endOfDay = 23 * 60 + 59;
    for (const car in inTimes) {
        const parkedTime = endOfDay - inTimes[car];
        carTimes[car] = (carTimes[car] || 0) + parkedTime;
    }

    // 요금 계산
    for (const car in carTimes) {
        const time = carTimes[car];
        if (time <= basicTime) {
            feesMap[car] = basicFee;
        } else {
            const extraTime = time - basicTime;
            const extraCharge = Math.ceil(extraTime / unitTime) * unitFee;
            feesMap[car] = basicFee + extraCharge;
        }
    }

    // 차량 번호 순으로 정렬하여 결과 생성
    const sortedCars = Object.keys(feesMap).sort();
    const answer = sortedCars.map(car => feesMap[car]);
    
    return answer;
}