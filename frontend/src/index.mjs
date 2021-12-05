import { Client } from "@notionhq/client"

var NOTION_KEY = 'secret_uYm6PlkZ3q7YMVqHruYJmohfg4qU8cTaLx9L7jc9K8Z'
var NOTION_DATABASE_ID = '118213a4707d441096debe88a34dc386'

console.log('ola mundo');

const notion = new Client({ auth: NOTION_KEY })

const databaseId = NOTION_DATABASE_ID

async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

addItem('MACO3');