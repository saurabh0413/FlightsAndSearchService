const { CityRepository } = require("../repository");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity({ name }) {
    try {
      const city = await this.cityRepository.createCity(name);
      return city;
    } catch (error) {
      console.log("something went wrong inside services");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("something went wrong inside services");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("something went wrong inside services");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong inside services");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.cityRepository.getAllCities({
        name: filter.name,
      });
      return cities;
    } catch (error) {
      console.log("something went wrong inside services");
      throw { error };
    }
  }
}

module.exports = CityService;
