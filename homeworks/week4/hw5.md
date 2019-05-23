## 請以自己的話解釋 API 是什麼
API - Application Programming Interface
應用程式介面 - 可以讓雙方交換資料
當要提供功能或是資料給別人使用的時候，可以透過 API 來交換資料

* 使用 API - 要拿別人的資料或用別人提供的功能
* 提供 API - 要提供自己的功能或是資料給別人使用

API 跟 WebAPI 的不同
* API 的提供者來自四面八方，不一定要來自網路
* WebAPI = HTTP API 透過 HTTP 協定交換資料的 API

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
201 Created
請求已經被實現，而且有一個新的資源已經依據請求的需要而建立，且其URI已經隨Location頭資訊返回。

444 No Response
Nginx上HTTP伺服器擴展。伺服器不向客戶端返回任何資訊，並關閉連接（有助於阻止惡意軟體）。

408 Request Timeout
請求超時。根據HTTP規範，用戶端沒有在伺服器預備等待的時間內完成一個請求的傳送，用戶端可以隨時再次提交這一請求而無需進行任何更改。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

####GET RESTAURANT
Gets resturants sorted by number of current customers

####URL
GET https://api.resturants/taiwan/stores/top

####Errors
503 Service Unavailable if error retrieving games status.
Description | Method | Path               | Parameters | Example
---- | ---
回傳所有餐廳資料 | GET | /restaurants     | _limit|/restaurants?_limit=10
回傳單一餐廳資料 | GET | /restaurants/:id | none|/restaurants/1
刪除餐廳 | DELETE | /restaurants/:id      | none|/restaurants/1
新增餐廳 | POST | /restaurants            | name / opening / address / phone|/restaurants
更改餐廳 | PATCH | /restaurants/:id       | name / opening / address / phone |/restaurants/1


|Parameters_Name |Type | Description |
----             |----
_limit           |integer|限制回傳資料數量。最大：100 / 預設：10
name             |String|餐廳名稱 
opening          |String|營業時間 
address          |String|地址 
phone            |String|電話
