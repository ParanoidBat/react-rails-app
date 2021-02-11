module Types
  module Input
    class UserInputType < Types::BaseInputObject
      argument :username, String, required: true
      argument :password_digest, String, required: true
    end
  end
end