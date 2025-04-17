interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLink: (url: string) => void;
}

export default function UploadModal({ isOpen, onClose, onLink }: UploadModalProps) {
  const handleLinkSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const url = formData.get('url') as string;
    if (url) {
      onLink(url);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-6">Upload Link</h2>

        <div className="space-y-4">
          <div className="border-t pt-4">
            <form onSubmit={handleLinkSubmit}>
              <input
                type="url"
                name="url"
                placeholder="Paste your link here"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-black text-white rounded-lg py-2 hover:bg-gray-800 transition-colors"
              >
                Add Link
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
