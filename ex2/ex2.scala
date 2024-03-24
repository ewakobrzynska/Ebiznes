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

}