class MessagesSerializer < ActiveModel::Serializer
  attributes :id, :body, :written_at

  belongs_to :user, serializer: UsersSerializer

  def written_at
    object.created_at.strftime('%H:%M %d %B %Y')
  end
end
