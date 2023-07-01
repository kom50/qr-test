
/**
 * Function to convert csv file data in array of object
 * 
 * @param {string} csvRawData - CSV file raw data
 * @returns {[]} - Returns array of object 
 */
function csvToArray(csvRawData) {
    // Get data as array format
    const data = csvRawData.split('\n').filter(row => !!row.trim());

    //Get header from CSV file 
    const headers = data[0].replaceAll("\"", "").split(',').filter(header => !!header.trim())

    // Returns an array of object
    return data.slice(1).map(row => {
        const columns = row.replaceAll("\"", "").split(',');
        return headers.reduce((obj, key, index) => {
            obj[key] = columns[index]
            return obj;
        }, {});
    });
}

const rawData = `
"Student Name","Gender","Class Level","Home State","Major","Extracurricular Activity","","","","","","","","","","","","","","","",""
"Alexandra","Female","4. Senior","CA","English","Drama Club","","","","","","","","","","","","","","","",""
"Andrew","Male","1. Freshman","SD","Math","Lacrosse","","","","","","","","","","","","","","","",""
"Anna","Female","1. Freshman","NC","English","Basketball","","","","","","","","","","","","","","","",""
"Becky","Female","2. Sophomore","SD","Art","Baseball","","","","","","","","","","","","","","","",""
"Benjamin","Male","4. Senior","WI","English","Basketball","","","","","","","","","","","","","","","",""
"Carl","Male","3. Junior","MD","Art","Debate","","","","","","","","","","","","","","","",""
"Carrie","Female","3. Junior","NE","English","Track & Field","","","","","","","","","","","","","","","",""
`

const data = csvToArray(rawData)

console.log(data)

/* 
Working with downloaded Google Sheet data in CVS file format and also with normal CSV file
Result:
[
  {
    'Student Name': 'Alexandra',
    Gender: 'Female',
    'Class Level': '4. Senior',
    'Home State': 'CA',
    Major: 'English',
    'Extracurricular Activity': 'Drama Club'
  },
  {
    'Student Name': 'Andrew',
    Gender: 'Male',
    'Class Level': '1. Freshman',
    'Home State': 'SD',
    Major: 'Math',
    'Extracurricular Activity': 'Lacrosse'
  },
  {
    'Student Name': 'Anna',
    Gender: 'Female',
    'Class Level': '1. Freshman',
    'Home State': 'NC',
    Major: 'English',
    'Extracurricular Activity': 'Basketball'
  },
  {
    'Student Name': 'Becky',
    Gender: 'Female',
    'Class Level': '2. Sophomore',
    'Home State': 'SD',
    Major: 'Art',
    'Extracurricular Activity': 'Baseball'
  },
  {
    'Student Name': 'Benjamin',
    Gender: 'Male',
    'Class Level': '4. Senior',
    'Home State': 'WI',
    Major: 'English',
    'Extracurricular Activity': 'Basketball'
  },
  {
    'Student Name': 'Carl',
    Gender: 'Male',
    'Class Level': '3. Junior',
    'Home State': 'MD',
    Major: 'Art',
    'Extracurricular Activity': 'Debate'
  },
  {
    'Student Name': 'Carrie',
    Gender: 'Female',
    'Class Level': '3. Junior',
    'Home State': 'NE',
    Major: 'English',
    'Extracurricular Activity': 'Track & Field'
  }
]
*/
