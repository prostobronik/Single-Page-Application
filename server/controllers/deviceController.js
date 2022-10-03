const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
  async create(reg, res, next) {
    try {
      const { creation, name, count, distance } = reg.body
      const device = await Device.create({
        creation,
        name,
        count,
        distance,
      })

      return res.json(device)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(reg, res) {
    const device = await Device.findAll()
    return res.json(device)
  }

  async getOne(reg, res) {
    const { id } = reg.params
    const device = await Device.findOne({
      where: { id },
    })
    return res.json(device)
  }
}

module.exports = new DeviceController()
