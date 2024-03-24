package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import play.api.libs.json._
import scala.collection.mutable

case class Product(id: Int, title: String, director: String, price: Double, stock: Int, description: String)

@Singleton
class ProductController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  private val products = new mutable.ListBuffer[Product]()
  products += Product(1, "Inception", "Christopher Nolan", 39.99, 20, "A mind-bending thriller")
  products += Product(2, "The Godfather", "Francis Ford Coppola", 35.99, 15, "A mafia epic")
  products += Product(3, "Parasite", "Bong Joon-ho", 28.99, 10, "A dark comedy about class struggle")
  products += Product(4, "Schindler's List", "Steven Spielberg", 37.99, 22, "A poignant drama about the Holocaust")

  implicit val productJson = Json.format[Product]

  // GET All
  def getAll(): Action[AnyContent] = Action {
    if (products.isEmpty){
      NoContent
    } else {
      Ok(Json.toJson(products))
    }
  }

  // GET with ID
  def getProduct(productId: Int) = Action {
    val product = products.find(_.id == productId)
    product match {
      case None => NotFound
      case Some(item) => Ok(Json.toJson(item))
    }
  }

  // POST new product
  def addNewProduct(): Action[JsValue] = Action(parse.json) { request =>
    request.body.validate[Product] match {
      case JsSuccess(product, _) =>
        val newId = products.map(_.id).max + 1
        val newProduct = product.copy(id = newId)
        products += newProduct
        Created(Json.toJson(newProduct))
      case JsError(errors) =>
        BadRequest(Json.obj("message" -> JsError.toJson(errors)))
    }
  }

  // PUT update product
  def updateProduct(productId: Int): Action[JsValue] = Action(parse.json) { request =>
    request.body.validate[Product] match {
      case JsSuccess(updatedProduct, _) =>
        products.indexWhere(_.id == productId) match {
          case -1 => NotFound
          case index =>
            products.update(index, updatedProduct.copy(id = productId))
            Ok(Json.toJson(updatedProduct))
        }
      case JsError(errors) =>
        BadRequest(Json.obj("message" -> JsError.toJson(errors)))
    }
  }

  // DELETE product
  def deleteProduct(productId: Int): Action[AnyContent] = Action {
    products.indexWhere(_.id == productId) match {
      case -1 => NotFound
      case index =>
        val deletedProduct = products.remove(index)
        Ok(Json.toJson(deletedProduct))
    }
  }

}