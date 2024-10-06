import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaCode,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaUndo,
  FaRedo,
  FaTextHeight,
} from "react-icons/fa";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="p-2 bg-gray-200 rounded-lg shadow-md flex space-x-2 mb-4">
      <div className="button-group flex items-center justify-start flex-wrap gap-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`p-2 rounded-md hover:bg-gray-300 ${
            editor.isActive("bold") ? "is-active" : ""
          }`}
        >
          <FaBold />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`p-2 rounded-md hover:bg-gray-300 ${
            editor.isActive("italic") ? "is-active" : ""
          }`}
        >
          <FaItalic />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`p-2 rounded-md hover:bg-gray-300 ${
            editor.isActive("strike") ? "is-active" : ""
          }`}
        >
          <FaStrikethrough />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={`p-2 rounded-md hover:bg-gray-300 ${
            editor.isActive("code") ? "is-active" : ""
          }`}
        >
          <FaCode />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className="p-2 rounded-md hover:bg-gray-300"
        >
          Clear marks
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().clearNodes().run()}
          className="p-2 rounded-md hover:bg-gray-300"
        >
          Clear nodes
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`p-2 rounded-md hover:bg-gray-300 ${
            editor.isActive("paragraph") ? "is-active" : ""
          }`}
        >
          <FaTextHeight />
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`p-2 rounded-md hover:bg-gray-300 ${
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }`}
        >
          H1
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`p-2 rounded-md hover:bg-gray-300 ${
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }`}
        >
          H2
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`p-2 rounded-md hover:bg-gray-300 ${
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }`}
        >
          H3
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={`p-2 rounded-md hover:bg-gray-300 ${
            editor.isActive("heading", { level: 4 }) ? "is-active" : ""
          }`}
        >
          H4
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={`p-2 rounded-md hover:bg-gray-300 ${
            editor.isActive("heading", { level: 5 }) ? "is-active" : ""
          }`}
        >
          H5
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={`p-2 rounded-md hover:bg-gray-300 ${
            editor.isActive("heading", { level: 6 }) ? "is-active" : ""
          }`}
        >
          H6
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded-md hover:bg-gray-300 ${
            editor.isActive("bulletList") ? "is-active" : ""
          }`}
        >
          <FaListUl />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded-md hover:bg-gray-300 ${
            editor.isActive("orderedList") ? "is-active" : ""
          }`}
        >
          <FaListOl />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`p-2 rounded-md hover:bg-gray-300 ${
            editor.isActive("codeBlock") ? "is-active" : ""
          }`}
        >
          Code block
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded-md hover:bg-gray-300 ${
            editor.isActive("blockquote") ? "is-active" : ""
          }`}
        >
          <FaQuoteLeft />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="p-2 rounded-md hover:bg-gray-300"
        >
          Horizontal rule
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHardBreak().run()}
          className="p-2 rounded-md hover:bg-gray-300"
        >
          Hard break
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className="p-2 rounded-md hover:bg-gray-300"
        >
          <FaUndo />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className="p-2 rounded-md hover:bg-gray-300"
        >
          <FaRedo />
        </button>
      </div>
    </div>
  );
};

const extensions = [
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
];

const Tiptap = ({ content, setContent }) => {
  const handleUpdate = ({ editor }) => {
    setContent(editor.getHTML());
  };

  return (
    <div className="editor-container border p-4 rounded-lg shadow-md outline-none">
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default Tiptap;
