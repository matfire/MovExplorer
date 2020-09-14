const db = new Dexie("info_store")

db.version(1).stores({
    movies: "fileName, data, tmId",
    tv: "fileName"
})

export default db