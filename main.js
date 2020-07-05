const companies= [
    {name: "company one",category:"Finance",start: 1981,end:2003},
    {name: "company two",category:"retail",start: 1999,end:2008},
    {name: "company three",category:"Auto",start: 1985,end:2016},
    {name: "company four",category:"retail",start: 1988,end:2009},
    {name: "company five",category:"Technology",start: 1986,end:1989},
    {name: "company six",category:"Finance",start: 1981,end:2003},
    {name: "company seven",category:"Auto",start: 1989,end:1996},
    {name: "company eight",category:"Technology",start: 1991,end:2003},
    {name: "company nine",category:"retail",start: 1974,end:1980},
];

const ages =[24,42,67,98,6,34,15,54,24,15,24,54,13,15,62,43,23];
//for(let i = 0; i<companies.length; i++){
//	console.log(companies[i]);
//}

//for each

//companies.forEach(function(company) {
//  console.log(company.name);
//});

//filter

//let canDrink = [];
//for (let i = 0 ; i<ages.length; i++) {
//	if(ages[i] >= 21){
	//	canDrink.push(ages[i]);
//	}
//}
//const canDrink= ages.filter(function(age){
// if( age >=21){
 //	return true;
// }
//}) ;
//const canDrink = ages.filter(age => age>=21);
// filter retail companies

//const retailCompanies = companies.filter(function(company){
 // if (company.category==="retail"){
 // 	return true;
//});
//const retailCompanies = companies.filter(company => company.category==='retail');

//console.log(retailCompanies);

// Get 80s companies

//const eightiesCompanies= companies.filter(company =>company.start>= 1980 && company.start<1990);

//get companies that lasted for 10 years

//const lastedTenYears = companies.filter(company => company.end-company.start >10);
//map
// create array of company names
//const testMap= companies.map(function(company){
 //  return '{company.name} [{company.start}-{company.end}]'
//})

//const ageMap = ages
//.map(age => Math.sqrt(age))
//.map(age => age*2);
//sort
//const sortedCompanies = companies.sort(function(c1, c2){
  //if(c1.start > c2.start){
  	//return 1;
  //}else{
  	//return -1;
  //}
//});

// sort companies by by start year
//const sortedCompanies = companies.sort((a, b) => (a.start > b.start) ? 1 : -1 );

//sort ages
//const sortAges = ages.sort((a , b)=> a-b );
//console.log(sortAges);
//reduce

//let ageSum = 0;
//for( let i=0; i<ages.length;i++){
//	ageSum += ages[i];
//}
//const ageSum= ages.reduce(function(total, age){
//	return total+age;
//},0);
//const ageSum = ages.reduce((total,age )=> total + age, 0);
// get total years for all companies

//const totalYears = companies.reduce(function(total,company){
//	return total + (company.end- company.start);
//}, 0);

// combined methods
 const combined = ages
 .map(age=> age*2);
 console.log(combined);
