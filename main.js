const COORD_DIGIT = { 'N': 2, 'S': 2, 'W': 3, 'E': 3 }
const COORD_SIGN = { 'N': 1, 'S': -1, 'W': -1, 'E': 1 }
const MARK = 'data:image/png;base64,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'

function select(type) {
	return new Promise(resolve => {
		const upload = document.createElement('input')
		upload.type = 'file'
		upload.accept = type
		const L = () => {
			resolve(upload.files[0])
		}
		upload.addEventListener('change', L, { once: true })
		upload.click()
	})
}

function readAsText(raw, encoding = 'utf8') {
	return new Promise(resolve => {
		const reader = new FileReader()
		reader.addEventListener('load', () => resolve(reader.result), {
			once: true
		})
		reader.readAsText(raw, encoding)
	})
}

function download(uri, filename) {
	const link = document.createElement('a')
	link.href = uri
	link.setAttribute('download', filename)
	document.body.appendChild(link)
	link.click()
	link.remove()
}

const globalOptions = {
  tryGBK: true,
  toGCJ: true
}

const GPS = {
  /**
   * @param {string} article 
   */
  parseFile(article, strict = false) {
    const lines = GPS.splitLine(article, strict)
    let time = null
    const res = []
    for (const line of lines) {
      const { line: normalizedLine, time: localTime } = GPS.normalizeLine(line)
      time = localTime
      const nmea = GPS.parseNMEA(normalizedLine)
      const gpgga = GPS.parseGPGGA(nmea)
      if (gpgga.longitude && gpgga.latitude) {
        // drop points without lng/lat
        res.push(gpgga)
      }
    }
    return res
  },

  /**
   * @param {[number, number][]} coords 
   */
  convertFrom(coords) {
    return new Promise((resolve, reject) => {
      AMap.convertFrom(coords, 'gps', (status, result) => {
        if (status === 'complete') {
          resolve(result.locations)
        } else if (status === 'error') {
          reject(result)
        }
      })
    })
  },

  /**
   * @param {[number, number][]} coords 
   */
  convertCoords(coords) {
    if (!globalOptions.toGCJ) {
      return Promise.resolve(coords.map(c => new AMap.LngLat(c[0], c[1])))
    }
    const partNum = Math.ceil(coords.length / 1000)

    const ps = []
    for (let i = 0; i < partNum; i++) {
      ps.push(GPS.convertFrom(coords.slice(i * 1000, (i + 1) * 1000)))
    }

    return Promise.all(ps).then(p => [].concat(...p))
  },

  /**
   * @param {string} article 
   */
  splitLine(article, strict = false) {
    return article.split(strict ? '\r\n' : /\r?\n/).map(s => s.trim()).filter(s => s.length)
  },

  /**
   * @param {string} line 
   * @param {Date} time 
   */
  normalizeLine(line, time) {
    if (line.includes('\ufffd')) {
      // quirk mode
      const match = line.match(/^\ufffd\ufffd(.*?)\ufffd\ufffd(.*)/)
      if (match) {
        return {
          line: match[2],
          time: moment(match[1], 'YYYY-MM-DD HH:mm:ss:SSS')
        }
      } else {
        return null
      }
    } else {
      const idx = line.indexOf('】')
      if (idx === -1) {
  
        return {
          line,
          time
        }
      } else {
        return {
          line: line.slice(idx + 1),
          time: moment(line.slice(1, idx), 'YYYY-MM-DD HH:mm:ss:SSS')
        }
      }
    }
  },

  /**
   * @param {string} line 
   */
  xor(line) {
    let res = line.charCodeAt(0)
    for (let i = 1; i < line.length; i++) {
      res ^= line.charCodeAt(i)
    }
    return res
  },

  /**
   * @param {string} line 
   */
  parseNMEA(line) {
    if (line[0] !== '$') return null
    line = line.slice(1)
    const last = line.lastIndexOf('*')
    if (last !== -1) {
      const checksum = parseInt(line.slice(last + 1), 16)
      line = line.slice(0, last)
      if (GPS.xor(line) !== checksum) return null
    }
    return line.split(',')
  },

  /**
   * @param {string} field 
   */
  parseUTC(field) {
    return moment.utc(field, 'HHmmss.SSS')
  },

  /**
   * @param {string} num 
   * @param {string} dir 
   */
  parseCoord(num, dir) {
    if (num === '') return null

    const digit = COORD_DIGIT[dir]
    const sign = COORD_SIGN[dir]
    return sign * (+num.slice(0, digit) + num.slice(digit) / 60)
  },

  /**
   * @param {string} num 
   * @param {string} unit 
   */
  parseDist(num, unit) {
    if (unit !== 'M' && unit !== '') return null
    return GPS.parseNumber(num)
  },

  /**
   * @param {string} field 
   */
  parseNumber(field) {
    return field.length === 0 ? null : +field
  },

  /**
   * @param {string[]} nmea 
   */
  parseGPGGA(nmea) {
    if (nmea[0] !== 'GPGGA') return null

    return {
      type: 'GPGGA',

      time: GPS.parseUTC(nmea[1]),
      latitude: GPS.parseCoord(nmea[2], nmea[3]),
      longitude: GPS.parseCoord(nmea[4], nmea[5]),
      altitude: GPS.parseDist(nmea[9], nmea[10]),
      quality: GPS.parseNumber(nmea[6]),
      satellites: GPS.parseNumber(nmea[7]),
      hdop: GPS.parseNumber(nmea[8]),
      geoidAltitude: GPS.parseDist(nmea[11], nmea[12]),
      age: GPS.parseNumber(nmea[13]),
      stationID: GPS.parseNumber(nmea[14])
    }
  }
}
const empty = e => e === null || typeof e === 'string' && e.length === 0


const app = new Vue({
  el: '#container',
  filters: {
    T8(num) {
      return num.toFixed(8)
    },
    TIME(time) {
      return time.format('HH:mm:ss.SSS')
    },
    STATUS(status) {
      return ['初始化', '单点定位', '码差分', '无效PPS', '固定解', '浮点解', '正在估算', '人工输入固定值', '模拟模式', 'WAAS差分'][status]
    }
  },
  data() {
    return {
      gpgga: '',
      longitude: null,
      latitude: null,

      marks: [],
      hasScroll: false,
      active: -1,
      thresh: 1000,

      showDialog: false,
      dialogIndex: -1,
      dialogContent: null,
      showAbout: false
    }
  },
  computed: {
    pointDisabled() {
      return empty(this.longitude) || empty(this.latitude)
    },
    gpggaDisabled() {
      return empty(this.gpgga)
    }
  },
  watch: {
    marks() {
      if (!this.$refs.scroller) return
      const h = this.$refs.scroller.$el.clientHeight
      this.hasScroll = this.marks.length * 28 > h
    },
    active(val, old) {
      if (val === -1) {
        this.showDialog = false
        this.dialogIndex = -1
        this.dialogContent = null
      } else {
        if (val === old) return
        const m = this.markers.findIndex(m => m.data.id === val)
        if (m !== -1) {
          this.dialogContent = this.markers[m].data
          this.dialogIndex = m
          this.showDialog = true
          this.showAbout = false
        } else {
          this.active = -1
        }
      }
    }
  },
  created() {
    this.map = null
    this.markers = []
    this.markCount = 0
  },
  mounted() {
    this.map = new AMap.Map(this.$refs.gpsMap, {
      expandZoomRange: true,
      zooms:[3,20]
    })
  },
  methods: {
    logMark(obj, marker, type) {
      this.markers.push({
        data: obj,
        marker
      })

      this.marks.push({
        type,
        lng: obj.longitude,
        lat: obj.latitude,
        id: obj.id
      })
    },
    scrollToBottom() {
      this.$nextTick(() => {
        this.$refs.scroller.scrollToItem(this.marks.length - 1)
      })
    },
    scrollToId(id) {
      const mark = this.marks.findIndex(m => m.id === id)
      if (mark === -1) return
      this.$refs.scroller.scrollToItem(mark > 0 ? mark - 1 : 0)
      this.active = id
    },
    addPoint() {
      GPS.convertCoords([[this.longitude, this.latitude]]).then(res => {
        const position = res[0]
        const marker = new AMap.Marker({
          position
        })
        
        this.map.add(marker)
        this.map.setCenter(position)
  
        const id = this.markCount++
        marker.on('click', () => {
          this.scrollToId(id)
        })
        this.logMark({
          latitude: this.latitude,
          longitude: this.longitude,
          lnglat: position,
          id
        }, marker, '坐标')
        this.scrollToBottom()
  
        this.longitude = null
        this.latitude = null
      })
    },
    addGPGGA() {
      try {
        const data = GPS.parseFile(this.gpgga)
        if (data.length === 0) return

        GPS.convertCoords(data.map(o => [o.longitude, o.latitude])).then(res => {
          data.forEach((o, i) => {
            o.id = this.markCount++
            o.lnglat = res[i]
          })
          const massMarks = new AMap.MassMarks(data, {
            zIndex: 5,
            zooms: [3, 20],
            alwaysRender: res.length < (this.thresh || 500),
            style: {
              url: MARK,
              anchor: new AMap.Pixel(3, 3),
              size: new AMap.Size(5, 5)
            }
          })

          massMarks.on('click', e => {
            const id = e.data.id
            this.scrollToId(id)
          })

          massMarks.setMap(this.map)

          // this.map.setFitView([massMarks]) // unusable
          this.fitMassMark(res)

          data.forEach(o => this.logMark(o, massMarks, 'GPS'))
          this.scrollToBottom()
  
          this.gpgga = ''
        })
      } catch (error) {
        throw new Error('Invalid GPGGA message')
      }
    },
    fitMassMark(points) {
      let minLng = points[0].getLng(), maxLng = minLng, minLat = points[0].getLat(), maxLat = minLat
      for (const lnglat of points) {
        const lng = lnglat.getLng()
        const lat = lnglat.getLat()
        if (lng < minLng) minLng = lng
        if (lng > maxLng) maxLng = lng
        if (lat < minLat) minLat = lat
        if (lat > maxLat) maxLat = lat
      }

      const position = new AMap.LngLat((minLng + maxLng) / 2, (minLat + maxLat) / 2)
      const p1 = this.map.lngLatToContainer(position)
      const p2 = this.map.lngLatToContainer(new AMap.LngLat(minLng, minLat))
      const containerSize = this.map.getSize()
      const p12w = p1.getX() - p2.getX()
      const p12h = p1.getY() - p2.getY()
      const cw = containerSize.getWidth() / 2
      const ch = containerSize.getHeight() / 2
      const zoom = this.map.getZoom()

      const zoomWH = Math.min(Math.floor(Math.log2(Math.abs(cw / 1.2 / p12w))), Math.floor(Math.log2(Math.abs(ch / 1.2 / p12h))))
      const newZoom = Math.max(Math.min(zoom + zoomWH, 19), 3)
      this.map.setZoomAndCenter(newZoom, position)
    },
    importFile() {
      select('text/*').then(f => {
        readAsText(f).then(text => {
          if (text.includes('\ufffd') && globalOptions.tryGBK) {
            readAsText(f, 'gbk').then(text => {
              this.gpgga = text
            })
          } else {
            this.gpgga = text
          }
        })
      })
    },
    exportImage() {
      download(this.map.getScreenShot(), 'map.png')
    },
    glob(k, v) {
      globalOptions[k] = v
    },
    centerMark() {
      this.map.setCenter(this.markers[this.dialogIndex].marker.getPosition())
    },
    centerMassMark() {
      this.map.setCenter(this.markers[this.dialogIndex].data.lnglat)
    },
    toggleMark() {
      const marker = this.markers[this.dialogIndex].marker
      const isVisible = marker.get('visible')
      if (isVisible) {
        marker.hide()
      } else {
        marker.show()
      }
    },
    deleteMark() {
      const marker = this.markers[this.dialogIndex].marker
      this.map.remove(marker)
      this.markers.splice(this.dialogIndex, 1)
      this.marks.splice(this.dialogIndex, 1)
      this.active = -1
    },
    createMark() {
      const data = this.markers[this.dialogIndex].data
      this.longitude = data.longitude
      this.latitude = data.latitude
      this.addPoint()
    },
    // toggleMassMark() {
    //   const marker = this.markers[this.dialogIndex].marker
    //   const isVisible = marker.get('visible')
    //   if (isVisible) {
    //     marker.hide()
    //   } else {
    //     marker.show()
    //   }
    // },
    deleteMassMark() {
      const marker = this.markers[this.dialogIndex].marker
      let first = -1, count = 0
      for (let i = 0; i < this.markers.length; i++) {
        const e = this.markers[i]
        if (first !== -1) {
          if (e.marker === marker) {
            count += 1
          } else {
            break
          }
        } else {
          if (e.marker === marker) {
            first = i
            count += 1
          }
        }
      }

      this.map.remove(marker)
      this.markers.splice(first, count)
      this.marks.splice(first, count)
      this.active = -1
    },

    about() {
      this.active = -1
      this.showAbout = true
    }
  }
})
