import Airtable from 'airtable'
import assert from 'assert'

const apiKey = import.meta.env.VITE_AIRTABLE_TOKEN
assert(apiKey, 'VITE_AIRTABLE_API_KEY is not defined')

export const airtable = new Airtable({ apiKey })
