from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Inicjalizacja WebDrivera dla Chrome
driver = webdriver.Chrome() 

def test_case_1():
    driver.get("https://example.com")
    assert "Example" in driver.title

def test_case_2():
    driver.get("https://example.com")
    search_input = driver.find_element_by_xpath("//input[@name='q']")
    search_input.send_keys("test")
    search_input.send_keys(Keys.RETURN)
    assert "No results found." not in driver.page_source

def test_case_3():
    driver.get("https://example.com")
    # Testowanie logowania użytkownika
    driver.find_element_by_id("login_button").click()
    driver.find_element_by_id("username").send_keys("example_user")
    driver.find_element_by_id("password").send_keys("password123")
    driver.find_element_by_id("login_submit").click()
    assert "Welcome, example_user!" in driver.page_source

def test_case_4():
    driver.get("https://example.com")
    # Testowanie dodawania przedmiotu do koszyka
    item = driver.find_element_by_class_name("item")
    item.click()
    driver.find_element_by_id("add_to_cart_button").click()
    assert "Item added to cart successfully!" in driver.page_source

def test_case_5():
    driver.get("https://example.com")
    # Testowanie wyszukiwania produktu
    search_input = driver.find_element_by_id("search_input")
    search_input.send_keys("smartphone")
    search_input.send_keys(Keys.RETURN)
    assert "Results for: smartphone" in driver.page_source

def test_case_6():
    driver.get("https://example.com")
    # Testowanie filtrowania produktów
    driver.find_element_by_id("filter_dropdown").click()
    driver.find_element_by_id("filter_price").click()
    driver.find_element_by_id("price_range_min").send_keys("100")
    driver.find_element_by_id("price_range_max").send_keys("500")
    driver.find_element_by_id("apply_filter_button").click()
    assert "Showing products in price range: $100 - $500" in driver.page_source

def test_case_7():
    driver.get("https://example.com")
    # Testowanie przeglądania kategorii produktów
    category_link = driver.find_element_by_link_text("Electronics")
    category_link.click()
    assert "Electronics" in driver.title

def test_case_8():
    driver.get("https://example.com")
    # Testowanie zapisywania adresu dostawy
    driver.find_element_by_id("address_input").send_keys("123 Main St")
    driver.find_element_by_id("save_address_button").click()
    assert "Address saved successfully!" in driver.page_source

def test_case_9():
    driver.get("https://example.com")
    # Testowanie dodawania produktu do listy życzeń
    item = driver.find_element_by_class_name("item")
    item.click()
    driver.find_element_by_id("add_to_wishlist_button").click()
    assert "Item added to wishlist!" in driver.page_source

def test_case_10():
    driver.get("https://example.com")
    # Testowanie procedury zamówienia
    driver.find_element_by_id("cart_button").click()
    driver.find_element_by_id("checkout_button").click()
    driver.find_element_by_id("confirm_order_button").click()
    assert "Order placed successfully!" in driver.page_source

def test_case_11():
    driver.get("https://example.com")
    # Testowanie formularza kontaktowego
    driver.find_element_by_id("contact_link").click()
    driver.find_element_by_id("name_input").send_keys("John Doe")
    driver.find_element_by_id("email_input").send_keys("john@example.com")
    driver.find_element_by_id("message_input").send_keys("Test message")
    driver.find_element_by_id("send_message_button").click()
    assert "Message sent successfully!" in driver.page_source

def test_case_12():
    driver.get("https://example.com")
    # Testowanie przeglądania strony głównej
    assert "Welcome to Example.com" in driver.page_source

def test_case_13():
    driver.get("https://example.com")
    # Testowanie wyszukiwania informacji na stronie
    search_input = driver.find_element_by_id("search_input")
    search_input.send_keys("information")
    search_input.send_keys(Keys.RETURN)
    assert "Search results for: information" in driver.page_source

def test_case_14():
    driver.get("https://example.com")
    # Testowanie odtwarzania wideo na stronie
    video = driver.find_element_by_id("video_player")
    video.click()
    assert video.is_playing()

def test_case_15():
    driver.get("https://example.com")
    # Testowanie sortowania wyników wyszukiwania
    driver.find_element_by_id("sort_dropdown").click()
    driver.find_element_by_id("sort_price_low_to_high").click()
    assert "Sorted by: Price (Low to High)" in driver.page_source

def test_case_16():
    driver.get("https://example.com")
    # Testowanie udostępniania produktów na mediach społecznościowych
    driver.find_element_by_class_name("share_button").click()
    driver.find_element_by_id("facebook_share").click()
    assert "Shared on Facebook!" in driver.page_source

def test_case_17():
    driver.get("https://example.com")
    # Testowanie komunikatów na stronie
    assert "Welcome to Example.com. Please browse our products." in driver.page_source

def test_case_18():
    driver.get("https://example.com")
    # Testowanie wyświetlania obrazów na stronie
    images = driver.find_elements_by_tag_name("img")
    for image in images:
        assert image.is_displayed()

def test_case_19():
    driver.get("https://example.com")
    # Testowanie przewijania strony
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    assert driver.execute_script("return window.scrollY") > 0

def test_case_20():
    driver.get("https://example.com")
    # Testowanie rejestrowania nowego użytkownika
    driver.find_element_by_id("register_link").click()
    driver.find_element_by_id("username_input").send_keys("new_user")
    driver.find_element_by_id("email_input").send_keys("new_user@example.com")
    driver.find_element_by_id("password_input").send_keys("new_password")
    driver.find_element_by_id("confirm_password_input").send_keys("new_password")
    driver.find_element_by_id("register_button").click()
    assert "Registration successful! Welcome, new_user!" in driver.page_source

# Uruchomienie przypadków testowych
if __name__ == "__main__":
    test_case_1()
    test_case_2()
    test_case_3()
    test_case_4()
    test_case_5()
    test_case_6()
    test_case_7()
    test_case_8()
    test_case_9()
    test_case_10()
    test_case_11()
    test_case_12()
    test_case_13()
    test_case_14()
    test_case_15()
    test_case_16()
    test_case_17()
    test_case_18()
    test_case_19()
    test_case_20()

# Zakończenie sesji WebDrivera
driver.quit()

