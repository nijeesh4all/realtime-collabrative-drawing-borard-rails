require 'test_helper'

class BoradControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get borad_index_url
    assert_response :success
  end

end
