const developer = {
    name: 'maksim',
    job: 'Front-end разработчик',
    experience: 24,
    jobAllInfo: {
        type: 'Front-end',
        framework: {
            // name: 'ReactJS'
        }
    }
};

// console.log('developer.jobAllInfo', developer.jobAllInfo);
// console.log('developer.jobAllInfo.framework', developer.jobAllInfo.framework);

// 1 

// if (developer.jobAllInfo.framework)

// if (developer && developer.jobAllInfo && developer.jobAllInfo.framework && developer.jobAllInfo.framework.name) {
//     console.log('разработчик уже знае фрейм ворк реактJS');
// } else {
//     console.log('разработчик еще не знает фреймворк');
// }

// // -------- 2 ОПЦИОНАЛЬНАЯ ЦЕПОЧКА С ПОМОЩЬЮ"?" - РЕКОМЕНДОВАННО

if (developer?.jobAllInfo?.framework?.name) {
    console.log('разработчик уже знае фрейм ворк реактJS');
} else {
    console.log('разработчик еще не знает фреймворк');
}