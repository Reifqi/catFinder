class DataSource {
  static async searchCat(name) {
    const response = await fetch(`https://api.api-ninjas.com/v1/cats?name=${name}`, {
      headers: {
        'X-Api-Key': 'uM1wOLi/oHua9DCIqS9w9Q==7BXf693NIAcBavA5',
      }
    });
    const responseJson = await response.json();
    if (responseJson.cats) {
      return Promise.resolve(responseJson.cats);
    }
    return await Promise.reject(`${name} is not found`);
  }
}
export default DataSource;