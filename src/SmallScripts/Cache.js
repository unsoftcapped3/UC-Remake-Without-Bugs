const DOMCache = new Map()

const DOM = (id) => {
    const cachedEl = DOMCache.get(id)
    if (cachedEl) return cachedEl

    const el = document.getElementById(id)
    DOMCache.set(id, el)
    return el
}