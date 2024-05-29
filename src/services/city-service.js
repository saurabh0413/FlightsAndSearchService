const { CityRepository } = require("../repository");

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity({ name }) {
    try {
      const city = await this.CityRepository.createCity(name);
      return city;
    } catch (error) {
      console.log("something went wrong inside services");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.CityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("something went wrong inside services");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.CityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("something went wrong inside services");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.CityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong inside services");
      throw { error };
    }
  }
}

module.exports = CityService;
